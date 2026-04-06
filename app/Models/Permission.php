<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = ['name', 'group', 'description'];

    /**
     * Get the roles that have this permission.
     */
    public function roles()
    {
        return $this->hasMany(RolePermission::class, 'permission_id');
    }
}
