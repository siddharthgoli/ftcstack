export function Footer({ className }: { className?: string }) {
    return (
        <footer
            className={`mt-auto border-t border-fd-border py-6 px-6 text-center text-sm text-fd-muted-foreground ${className ?? ""}`}
        >
            &copy; 2026 FTC Stack. All rights reserved.
        </footer>
    );
}
