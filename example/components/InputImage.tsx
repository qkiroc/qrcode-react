import React, {useState} from 'react';
import '../css/input_image.css';

interface InputImageProps {
  onChange: (image: string | ArrayBuffer | null) => void;
}

const InputImage: React.FC<InputImageProps> = ({onChange}) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [file, setFile] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.value);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImage(result);
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleDeleteImage() {
    setFile('');
    setImage(null);
    onChange(null);
  }

  return (
    <div className={'input-image' + (image ? ' has-image' : '')}>
      <label className="input-image-label">
        <input
          value={file}
          className="input-image-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <span>{image ? '重新上传' : '上传LOGO'}</span>
      </label>

      {image && (
        <div className="input-image-preview">
          <img src={image as string} />
          <div
            className="input-image-preview-close"
            onClick={handleDeleteImage}
          >
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
              <path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputImage;
