<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = ['key', 'value', 'type', 'group'];

    /**
     * Get all settings as a key-value associative array.
     */
    public static function allMapped(): array
    {
        return self::all()->pluck('value', 'key')->toArray();
    }
}
