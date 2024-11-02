import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./FileInput.styles";

interface FileInputProps {
  allowTypes?: string[];
  fileSizeLimit?: number;
  multiple?: boolean;
}

interface FileState {
  _id: string;
  progress: number;
  completed: boolean;
  file: File;
}

export const FileInput: React.FC<FileInputProps> = ({
  allowTypes = ["image/png", "image/webp", "image/jpeg"],
  fileSizeLimit = 25000000,
  multiple = true
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const [filestoUpload, setFilesToUpload] = useState<FileState[]>([]);

  useEffect(() => {
    const dropzone = dropzoneRef.current;
    if (dropzone) {
      dropzone.addEventListener("dragover", event => {
        event.preventDefault();
        dropzone.style.border = "0.0625rem dashed blue";
      });

      dropzone.addEventListener("dragleave", () => {
        dropzone.style.border = "0.0625rem dashed gray";
      });

      dropzone.addEventListener("drop", event => {
        event.preventDefault();
        dropzone.style.border = "0.0625rem dashed gray";
        handleUploadFile(event.dataTransfer?.files);
      });
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUploadFile(event.target.files || undefined);
  };

  const handleUploadFile = async (files: FileList | undefined) => {
    if (!files) return;

    // const fileToSend: FileState[] = multiple ? Array.from(files) : [files[0]];

    // const fileToSend: FileState[] = multiple
    //   ? Array.from(files).map(file => ({ _id: generateId(), progress: 0, file }))
    //   : [{ _id: generateId(), progress: 0, file: files[0] }];

    const test = multiple ? Array.from(files) : [files[0]];
    const fileToSend: FileState[] = Array.from(test).map(file => ({
      _id: generateId(),
      completed: false,
      progress: 0,
      file
    }));

    const validFiles = fileToSend.filter(fileObj => {
      if (allowTypes && !allowTypes.includes(fileObj.file.type)) {
        console.error("Invalid file type");
        return false;
      }

      if (fileObj.file.size > fileSizeLimit * 1024) {
        console.error("File size too large");
        return false;
      }

      if (filestoUpload.some(f => f.file.name === fileObj.file.name)) {
        console.error("File already added");
        return false;
      }

      return true;
    });

    setFilesToUpload([...filestoUpload, ...validFiles]);

    // handleUploadStart();
  };

  React.useEffect(() => {
    console.log(91);
    handleUploadStart();
  }, [filestoUpload]);

  const handleUploadStart = () => {
    console.log(92);
    const formData = new FormData();
    const readyFiles = filestoUpload.filter(file => file.progress === 0);
    readyFiles.forEach(fileObj => formData.append("files", fileObj.file));
    readyFiles.forEach(fileObj => uploadFileWithProgress(formData, fileObj));
  };

  const uploadFileWithProgress = (formData: FormData, fileObj: FileState) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:8008/api/v1/fileUploading", true);

    xhr.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Progress for ${fileObj.file.name}: ${percentComplete.toFixed(2)}%`);

        setFilesToUpload(prevFiles =>
          prevFiles.map(prevFile => {
            if (prevFile._id === fileObj._id) {
              return { ...prevFile, progress: percentComplete };
            }
            return prevFile;
          })
        );

        if (percentComplete >= 100) {
          setFilesToUpload(prevFiles =>
            prevFiles.map(prevFile => {
              if (prevFile._id === fileObj._id) {
                return { ...prevFile, completed: true };
              }
              return prevFile;
            })
          );
        }
      }
    });

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(`File ${fileObj.file.name} uploaded successfully`);
        // Update state to mark file as uploaded
      } else {
        console.error(`Error uploading ${fileObj.file.name}: ${xhr.statusText}`);
      }
    };

    xhr.onerror = () => {
      console.error("Upload failed. Please try again.");
    };

    xhr.send(formData);
  };

  return (
    <>
      <Styled.NativeFileInput>
        <input
          accept={allowTypes.join(",")}
          multiple={multiple}
          onChange={handleChange}
          ref={inputRef}
          type="file"
        />
      </Styled.NativeFileInput>

      <Styled.DropzoneWrapper ref={dropzoneRef} onClick={() => inputRef.current?.click()}>
        Upload
      </Styled.DropzoneWrapper>

      <Styled.FileInputButton onClick={() => inputRef.current?.click()}>
        Choose File
      </Styled.FileInputButton>

      {filestoUpload.map(file => (
        <Styled.ImagePreviewWrapper key={file.file.name}>
          {/* <Styled.ImageWrapper>
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              style={{ width: "100px", height: "auto" }}
            />
          </Styled.ImageWrapper> */}

          <div>{file.file.name}</div>

          <div>{formatFileSize(file.file.size)}</div>

          <div>Ready to upload</div>

          <Styled.ProgressBar $progress={file.progress}>
            <div />
          </Styled.ProgressBar>
        </Styled.ImagePreviewWrapper>
      ))}
    </>
  );
};

function formatFileSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Bytes";

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = (bytes / Math.pow(1024, i)).toFixed(2);

  return `${size} ${sizes[i]}`;
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
