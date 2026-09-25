"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
    href: string;
    label: string;
};

type NavLinksProps = {
    items: NavItem[];
};

function NavLinks({ items }: NavLinksProps) {
    const pathname = usePathname();

    return (
        <nav aria-label="Navegación principal" className="order-3 w-full sm:order-0 sm:w-auto">
            <ul className="flex items-center gap-5 overflow-x-auto text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {items.map(({ href, label }) => {
                    const isActive =
                        pathname === href ||
                        (href !== "/" && pathname.startsWith(`${href}/`));

                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`whitespace-nowrap rounded-md px-2 py-1 transition-colors ${
                                    isActive
                                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                                        : "hover:text-cyan-600 dark:hover:text-cyan-400"
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <a
                        className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                        href="https://nextjs.org/docs/app/getting-started/project-structure"
                    >
                        Next.js
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;
