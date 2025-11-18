import { ImageSourcePropType } from "react-native";

export type blogList ={
    id:string;
    profileImage:ImageSourcePropType;
    profileName:string;
    uploadTime:string;
    uploadText:string;
    postImage:ImageSourcePropType;
    postLike:number;
    comments:number;
}

export type inputContainerType = {
    control:any;
    errors:any;
    placeholder:string;
    name:any
    label:string;
    changeEyeIcon?:boolean;
    setChangeEyeIcon?:React.Dispatch<React.SetStateAction<boolean>>;
}

export type OTPInputProps = {
  length?: number;
  onCodeFilled?: (code: string) => void;
};

export type ChatListItemType = {
    item:{
        id:string;
        profileImage:ImageSourcePropType;
        profileName:string;
        message:string;
        timeLine:string;
    }
    goTochatHistory:(id:string)=>void;
}

export type BlogListType = {
    item:blogList;
    followRef?:any;
}

export type VideoCardType = {
    uri: string;
    isActive: boolean;
}