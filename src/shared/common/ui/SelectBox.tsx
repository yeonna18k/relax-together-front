import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';

export type SelectBoxMenuItem = {
	value: string;
	label: string;
};

interface DropdownProps {
	placeholder: string;
	menuItems: Array<SelectBoxMenuItem>;
}
export default function SelectBox({ placeholder, menuItems }: DropdownProps) {
	return (
		<Select>
			<SelectTrigger className="max-w-[28.75rem] lg:w-full">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{menuItems.map((menuItem) => (
					<SelectItem key={menuItem.value} value={menuItem.value}>
						{menuItem.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
