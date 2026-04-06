<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of users with their roles.
     */
    public function index()
    {
        $roles = [
            User::ROLE_SUPER_ADMIN,
            User::ROLE_ADMIN,
            User::ROLE_MANAGER,
            User::ROLE_STAFF,
            User::ROLE_USER,
        ];

        return Inertia::render('Admin/Users/Index', [
            'users' => User::select('id', 'name', 'email', 'role', 'created_at')->orderBy('created_at', 'desc')->get(),
            'availableRoles' => $roles,
            'permissions' => \App\Models\Permission::all()->groupBy('group'),
            'rolePermissions' => \App\Models\RolePermission::all()->groupBy('role')->map(function ($items) {
                return $items->pluck('permission_id');
            }),
        ]);
    }

    /**
     * Update the specified user's role.
     */
    public function updateRole(Request $request, User $user)
    {
        $request->validate([
            'role' => 'required|string|in:super_admin,admin,manager,staff,user',
        ]);

        // Prevent super admin from demoting themselves (optional but recommended)
        if ($request->user()->id === $user->id && $user->role === User::ROLE_SUPER_ADMIN && $request->role !== User::ROLE_SUPER_ADMIN) {
             return redirect()->back()->with('error', 'You cannot demote yourself from Super Admin.');
        }

        $user->update(['role' => $request->role]);

        return redirect()->back()->with('success', "Role for {$user->name} updated to {$request->role}.");
    }

    /**
     * Bulk update permissions for a specific role.
     */
    public function updatePermissions(Request $request)
    {
        $request->validate([
            'role' => 'required|string|in:admin,manager,staff,user',
            'permissions' => 'present|array',
            'permissions.*' => 'exists:permissions,id',
        ]);

        \App\Models\RolePermission::where('role', $request->role)->delete();

        foreach ($request->permissions as $permissionId) {
            \App\Models\RolePermission::create([
                'role' => $request->role,
                'permission_id' => $permissionId,
            ]);
        }

        return redirect()->back()->with('success', "Permissions for " . ucfirst($request->role) . " updated successfully.");
    }
}
