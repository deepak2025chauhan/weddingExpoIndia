<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Setting;

class SettingController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Settings', [
            'settings' => Setting::where('group', 'navigation')->get()
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value' => 'required',
        ]);

        foreach ($request->settings as $settingData) {
            // Correctly handle boolean values to store as 'true' or 'false' strings
            $value = is_bool($settingData['value']) 
                ? ($settingData['value'] ? 'true' : 'false') 
                : (string) $settingData['value'];

            Setting::where('key', $settingData['key'])->update([
                'value' => $value
            ]);
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
