import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { LayoutDashboard, Users, MessageSquare, Image, Settings } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
];

export default function AdminDashboard() {
    const stats = [
        { name: 'Total Exhibitors', value: '128', icon: Users, color: 'text-blue-600' },
        { name: 'Pending Approvals', value: '12', icon: MessageSquare, color: 'text-orange-600' },
        { name: 'Live Sessions', value: '4', icon: Image, color: 'text-green-600' },
        { name: 'New Leads', value: '45', icon: LayoutDashboard, color: 'text-purple-600' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />
            
            <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">Admin Console</h1>
                    <div className="flex items-center gap-2">
                        <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
                            Download Report
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.name} className="flex items-center gap-4 rounded-xl border bg-white p-6 shadow-sm">
                            <div className={`rounded-lg bg-gray-100 p-3 ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                <p className="text-2xl font-bold">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold">Exhibitor Management</h3>
                        <div className="relative h-64 w-full rounded-lg border-2 border-dashed border-gray-200">
                             <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-sm text-gray-400">Content Management Interface</p>
                             </div>
                        </div>
                    </div>
                    
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-3 border-b pb-3 last:border-0 last:pb-0">
                                    <div className="h-8 w-8 rounded-full bg-gray-100" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">New Exhibitor Registered</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold">Platform Settings</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                         <div className="flex flex-col gap-2 rounded-lg bg-gray-50 p-4">
                            <Settings className="h-5 w-5 text-gray-400" />
                            <p className="text-sm font-medium">General Settings</p>
                            <p className="text-xs text-gray-500">Manage global platform configurations.</p>
                         </div>
                         <div className="flex flex-col gap-2 rounded-lg bg-gray-50 p-4">
                            <Users className="h-5 w-5 text-gray-400" />
                            <p className="text-sm font-medium">User Roles</p>
                            <p className="text-xs text-gray-500">Control permissions and access levels.</p>
                         </div>
                         <div className="flex flex-col gap-2 rounded-lg bg-gray-50 p-4">
                            <Image className="h-5 w-5 text-gray-400" />
                            <p className="text-sm font-medium">Asset Manager</p>
                            <p className="text-xs text-gray-500">Manage uploaded images and media.</p>
                         </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
