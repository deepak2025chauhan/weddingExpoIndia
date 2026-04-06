<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $permission): Response
    {
        if ($request->user() && $request->user()->hasPermission($permission)) {
            return $next($request);
        }

        return redirect()->back()->with('error', 'You do not have permission to perform this action.');
    }
}
