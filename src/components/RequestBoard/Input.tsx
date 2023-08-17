type InputProps = {
    placeholder: string;
    type: string;
};

export default function Input({ placeholder, type }: InputProps) {
    return (
        <div className="text-black-light font-medium">
            <label htmlFor="search" className="sr-only">
                {placeholder}
            </label>
            <input
                id="search"
                type={type}
                placeholder={placeholder}
                className="placeholder:text-black-light outline-none bg-transparent"
            />
        </div>
    );
}
