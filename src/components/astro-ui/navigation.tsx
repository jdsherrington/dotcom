import {
	NavigationMenu as NavigationMenuBase,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface NavigationMenuProps {
	items: [string, string][];
}

export default function NavigationMenu({ items }: NavigationMenuProps) {
	return (
		<NavigationMenuBase>
			<NavigationMenuList>
				{items.map(([text, link], index) => (
					<NavigationMenuItem key={index}>
						<a href={link}>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}
							>
								{text}
							</NavigationMenuLink>
						</a>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenuBase>
	);
}
