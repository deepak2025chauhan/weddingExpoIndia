import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Save, ShieldCheck, Eye, EyeOff } from 'lucide-react';

interface Setting {
    id: number;
    key: string;
    value: string;
    type: string;
    group: string;
}

interface Props {
    settings: Setting[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Settings',
        href: '/admin/settings',
    },
];

export default function Settings({ settings }: Props) {
    const { data, setData, post, processing, recentlySuccessful } = useForm({
        settings: settings.map(s => ({
            key: s.key,
            value: s.value === 'true'
        }))
    });

    const handleToggle = (key: string) => {
        const updatedSettings = data.settings.map(s => {
            if (s.key === key) {
                return { ...s, value: !s.value };
            }
            return s;
        });
        setData('settings', updatedSettings);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Navigation Settings" />
            
            <div className="flex flex-1 flex-col gap-6 p-6 max-w-4xl">
                <div className="flex items-center justify-between border-b pb-6">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Navigation Settings</h1>
                        <p className="text-gray-500 text-sm mt-1">Control which buttons and links are visible on the main website.</p>
                    </div>
                </div>

                <form onSubmit={submit} className="space-y-8">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex items-center gap-3">
                            <ShieldCheck className="text-[#ED8B00]" size={20} />
                            <h3 className="font-semibold text-[16px]">Main Navigation Toggles</h3>
                        </div>
                        
                        <div className="divide-y divide-gray-100">
                            {data.settings.map((setting) => (
                                <div key={setting.key} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-gray-900 capitalize">
                                            {setting.key.replace(/_/g, ' ').replace('show ', '')}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Toggle visibility for the "{setting.key.replace(/_/g, ' ').replace('show ', '')}" element.
                                        </span>
                                    </div>
                                    
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(setting.key)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#ED8B00] focus:ring-offset-2 ${
                                            setting.value ? 'bg-[#ED8B00]' : 'bg-gray-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                setting.value ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        {recentlySuccessful && (
                            <span className="text-sm text-green-600 font-medium animate-in fade-in transition-all">
                                Changes saved successfully!
                            </span>
                        )}
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black/90 transition-all disabled:opacity-50"
                        >
                            <Save size={18} />
                            {processing ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>

                {/* Preview Alert */}
                <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 flex gap-3">
                    <div className="text-blue-500">
                         <Eye size={20} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-blue-900">Live Preview Tip</h4>
                        <p className="text-xs text-blue-700 mt-1">Changes made here will reflect globally across the public website immediately after saving.</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
