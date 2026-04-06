<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            // User Management
            ['name' => 'users.view', 'group' => 'Users', 'description' => 'Can view the list of users'],
            ['name' => 'users.create', 'group' => 'Users', 'description' => 'Can create new users'],
            ['name' => 'users.edit', 'group' => 'Users', 'description' => 'Can edit user details and roles'],
            ['name' => 'users.delete', 'group' => 'Users', 'description' => 'Can delete users'],

            // Settings
            ['name' => 'settings.view', 'group' => 'Settings', 'description' => 'Can view site settings'],
            ['name' => 'settings.edit', 'group' => 'Settings', 'description' => 'Can modify site settings'],

            // Content (Exhibitors/News)
            ['name' => 'content.view', 'group' => 'Content', 'description' => 'Can view content (News, Exhibitors)'],
            ['name' => 'content.create', 'group' => 'Content', 'description' => 'Can create new content'],
            ['name' => 'content.edit', 'group' => 'Content', 'description' => 'Can edit existing content'],
            ['name' => 'content.delete', 'group' => 'Content', 'description' => 'Can delete content'],

            // Roles & Permissions
            ['name' => 'roles.manage', 'group' => 'Security', 'description' => 'Can manage role permissions (Super Admin only typically)'],
        ];

        foreach ($permissions as $permission) {
            \App\Models\Permission::updateOrCreate(['name' => $permission['name']], $permission);
        }
    }
}
