import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Shield, Mail, Calendar, Check, ChevronDown, User as UserIcon, Lock, Users as UsersIcon, Save, Info } from 'lucide-react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface Permission {
    id: number;
    name: string;
    group: string;
    description: string;
}

interface Props {
    users: User[];
    availableRoles: string[];
    permissions: Record<string, Permission[]>;
    rolePermissions: Record<string, number[]>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Roles & Permissions',
        href: '/admin/users',
    },
];

const roleColors: Record<string, string> = {
    super_admin: 'bg-red-100 text-red-700 border-red-200',
    admin: 'bg-orange-100 text-orange-700 border-orange-200',
    manager: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    staff: 'bg-blue-100 text-blue-700 border-blue-200',
    user: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function UserManagement({ users, availableRoles, permissions, rolePermissions }: Props) {
    const [activeTab, setActiveTab] = useState<'users' | 'permissions'>('users');
    const [updatingId, setUpdatingId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
    // Permission Matrix State
    const [selectedRole, setSelectedRole] = useState<string>('admin');
    const [currentRolePermissions, setCurrentRolePermissions] = useState<number[]>(rolePermissions[selectedRole] || []);
    const [isSavingPermissions, setIsSavingPermissions] = useState(false);

    const handleRoleChange = (userId: number, newRole: string) => {
        setUpdatingId(userId);
        setSuccessMessage(null);
        
        router.patch(route('admin.users.update-role', userId), { role: newRole }, {
            preserveScroll: true,
            onFinish: () => setUpdatingId(null),
            onSuccess: () => {
                setSuccessMessage("User role updated successfully!");
                setTimeout(() => setSuccessMessage(null), 3000);
            },
            onError: (errors: any) => {
                alert(errors.role || "Failed to update role.");
                setUpdatingId(null);
            }
        });
    };

    const handlePermissionToggle = (permissionId: number) => {
        setCurrentRolePermissions(prev => 
            prev.includes(permissionId) 
                ? prev.filter(id => id !== permissionId) 
                : [...prev, permissionId]
        );
    };

    const savePermissions = () => {
        setIsSavingPermissions(true);
        router.post(route('admin.users.update-permissions'), {
            role: selectedRole,
            permissions: currentRolePermissions
        }, {
            preserveScroll: true,
            onFinish: () => setIsSavingPermissions(false),
            onSuccess: () => {
                setSuccessMessage(`Permissions for ${selectedRole} updated!`);
                setTimeout(() => setSuccessMessage(null), 3000);
            }
        });
    };

    // Update local state when selected role changes
    const onRoleSelect = (role: string) => {
        setSelectedRole(role);
        setCurrentRolePermissions(rolePermissions[role] || []);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Roles & Permissions" />
            
            <div className="flex flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Roles & Permissions</h1>
                        <p className="text-muted-foreground">Manage user roles and granular CRUD authorizations</p>
                    </div>
                    {successMessage && (
                        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg border border-emerald-100 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                            <Check size={18} />
                            <span className="text-sm font-medium">{successMessage}</span>
                        </div>
                    )}
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 w-fit rounded-lg border border-slate-200">
                    <button 
                        onClick={() => setActiveTab('users')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'users' ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-black'}`}
                    >
                        <UsersIcon size={16} />
                        Users List
                    </button>
                    <button 
                        onClick={() => setActiveTab('permissions')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'permissions' ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-black'}`}
                    >
                        <Lock size={16} />
                        Permission Matrix
                    </button>
                </div>

                {activeTab === 'users' ? (
                    <div className="rounded-xl border bg-card shadow-sm overflow-hidden bg-white">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="w-[300px]">User</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Joined</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id} className="hover:bg-muted/30 transition-colors">
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                                                    <UserIcon size={20} className="text-slate-500" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-[15px]">{user.name}</span>
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <Mail size={12} />
                                                        {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`capitalize px-2.5 py-0.5 rounded-full font-medium ${roleColors[user.role]}`}>
                                                {user.role.replace('_', ' ')}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                <Calendar size={14} />
                                                {new Date(user.created_at).toLocaleDateString()}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline" size="sm" className="gap-2 h-9 border-slate-200" disabled={updatingId === user.id}>
                                                        {updatingId === user.id ? 'Updating...' : 'Assign Role'}
                                                        <ChevronDown size={14} />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-[200px]">
                                                    {availableRoles.map((role) => (
                                                        <DropdownMenuItem 
                                                            key={role} 
                                                            onClick={() => handleRoleChange(user.id, role)}
                                                            className="flex items-center justify-between py-2.5 capitalize cursor-pointer"
                                                        >
                                                            {role.replace('_', ' ')}
                                                            {user.role === role && <Check size={16} className="text-emerald-500" />}
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Role Selector Sidebar */}
                        <div className="lg:col-span-1 flex flex-col gap-2">
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 px-1">Select Role to Configure</h3>
                            {availableRoles.filter(r => r !== 'super_admin').map((role) => (
                                <button
                                    key={role}
                                    onClick={() => onRoleSelect(role)}
                                    className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all text-left ${selectedRole === role ? 'bg-black text-white border-black' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}`}
                                >
                                    <span className="font-bold capitalize">{role.replace('_', ' ')}</span>
                                    {selectedRole === role && <Check size={16} />}
                                </button>
                            ))}
                            
                            <div className="mt-4 p-4 rounded-lg bg-orange-50 border border-orange-100 flex gap-3">
                                <Info className="text-orange-500 shrink-0" size={18} />
                                <p className="text-xs text-orange-800 leading-relaxed">
                                    <strong>Super Admin</strong> always has full access and cannot be modified. Changes to other roles reflect immediately.
                                </p>
                            </div>
                        </div>

                        {/* Permission Matrix */}
                        <div className="lg:col-span-3 flex flex-col gap-6">
                            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                                <div className="p-4 bg-slate-50 border-b flex items-center justify-between">
                                    <h3 className="font-bold flex items-center gap-2 capitalize">
                                        <Shield size={18} className="text-slate-500" />
                                        {selectedRole.replace('_', ' ')} Permissions
                                    </h3>
                                    <Button 
                                        size="sm" 
                                        onClick={savePermissions} 
                                        disabled={isSavingPermissions}
                                        className="bg-black hover:bg-black/90 gap-2"
                                    >
                                        <Save size={14} />
                                        {isSavingPermissions ? 'Saving...' : 'Save Matrix'}
                                    </Button>
                                </div>

                                <div className="divide-y divide-slate-100">
                                    {Object.entries(permissions).map(([group, groupPermissions]) => (
                                        <div key={group} className="p-0">
                                            <div className="bg-slate-50/50 px-6 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                                                {group}
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
                                                {groupPermissions.map((permission) => (
                                                    <div 
                                                        key={permission.id} 
                                                        className="bg-white p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer"
                                                        onClick={() => handlePermissionToggle(permission.id)}
                                                    >
                                                        <div className="flex flex-col gap-0.5">
                                                            <span className="text-sm font-semibold text-slate-900 capitalize">
                                                                {permission.name.split('.')[1].replace('-', ' ')} {group.toLowerCase()}
                                                            </span>
                                                            <span className="text-[11px] text-slate-500 group-hover:text-slate-700">
                                                                {permission.description}
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                                                                currentRolePermissions.includes(permission.id) ? 'bg-black' : 'bg-slate-200'
                                                            }`}
                                                        >
                                                            <span
                                                                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                                                                    currentRolePermissions.includes(permission.id) ? 'translate-x-5' : 'translate-x-1'
                                                                }`}
                                                            />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
