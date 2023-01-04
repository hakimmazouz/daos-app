interface TextFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  required: boolean;
}

export default function TextField({
  name,
  type = "text",
  placeholder,
  required,
}: TextFieldProps) {
  return (
    <div className="relative mt-1 rounded-md shadow-sm">
      <input
        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
