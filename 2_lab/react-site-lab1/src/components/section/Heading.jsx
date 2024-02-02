export default function Heading({ className, children }) {
    return (
        <div className={className}>
            <div className="wrap-heading">
                {children}
            </div>
        </div>
    );
}