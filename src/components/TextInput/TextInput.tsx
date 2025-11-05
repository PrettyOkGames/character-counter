export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// export const TextInput: React.FC<TextInputProps> = ({
//   onTextChange,
//   placeholder = 'Start typing...',
//   initialValue = ''
// }) => {
//   return (
//     <div className="w-full">
//       <textarea
//         className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         placeholder={placeholder}
//         defaultValue={initialValue}
//         onChange={(e) => onTextChange(e.target.value)}
//         rows={6}
//       />
//     </div>
//   );
// };

function TextInput({onTextChange, placeholder, initialValue}: TextInputProps) {
    return <section className="">
        <textarea
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        defaultValue={initialValue}
        rows={6}
        className="text-[#686868] p-[15px] min-h-[150px] w-[600px] bg-[#ffffff] rounded-[4px]"
        ></textarea>
    </section>
}

export default TextInput