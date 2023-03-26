import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import FileUploader from '../components/FileUploader/index';
import './App.css';

function Hello() {
  FileUploader.defaultProps = {
    options: {
      type: 'word',
      buttonText: '上传word',
    },
  };
  const handleUpload = (file: File) => {
    console.log('上传文件：', file);
  };
  return (
    <div className="button_interval">
      <FileUploader options={{ type: 'docx', buttonText: '导入word' }} onUpload={handleUpload} />
      <FileUploader options={{ type: 'xlsx', buttonText: '导入Excel' }} onUpload={handleUpload} />
      <FileUploader options={{ type: 'pdf', buttonText: '导入PDF' }} onUpload={handleUpload} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
