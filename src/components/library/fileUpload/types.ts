export interface IFileUploadProps {
    mediaUrl: string;
    percentage: number;
    isCompleted: boolean;
    fileHandler: () => void;
    mediaType?: string;
}
