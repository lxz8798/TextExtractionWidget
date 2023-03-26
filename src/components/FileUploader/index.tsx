import React, { useRef } from 'react';

interface IProps {
  options?: {
    type: 'doc' | 'docx' | 'pdf' | 'xls' | 'xlsx';
    buttonText: string;
  };
  onUpload: (file: File) => void;
}

const FileUploader: React.FC<IProps> = ({ options = { type: 'word' }, onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (options.type === 'word' && !/\.docx?$/.test(file.name.toLowerCase())) {
        alert('请上传Word文件！');
        return;
      }
      onUpload(file);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>上传{options.type}</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept={options.type === 'word' ? '.doc,.docx' : ''}
      />
    </div>
  );
};

export default FileUploader;
