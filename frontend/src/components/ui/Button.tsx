export default function CustomButton({ children }: { children: React.ReactNode }) {
    return (
    <button 
        type="button" 
        className="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">
        {children}
    </button>
    );
}