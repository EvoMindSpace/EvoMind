import { LucideIcon } from "lucide-react";

interface BadgeProps {
	icon?: LucideIcon;
	children: React.ReactNode;
	className?: string;
}

const Badge = ({ icon: Icon, children, className = "" }: BadgeProps) => {
	return (
		<span
			className={`bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${className}`}
		>
			{Icon && <Icon className="w-4 h-4" />}
			{children}
		</span>
	);
};

export default Badge;
