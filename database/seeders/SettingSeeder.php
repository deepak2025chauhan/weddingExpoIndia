<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            ['key' => 'show_register_button', 'value' => 'true', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'show_discover_button', 'value' => 'true', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'show_news_link', 'value' => 'true', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'show_expo_map_link', 'value' => 'true', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'show_experiences_dropdown', 'value' => 'true', 'type' => 'boolean', 'group' => 'navigation'],
            ['key' => 'show_understanding_dropdown', 'value' => 'true', 'type' => 'boolean', 'group' => 'navigation'],
        ];

        foreach ($settings as $setting) {
            \App\Models\Setting::updateOrCreate(['key' => $setting['key']], $setting);
        }
    }
}
