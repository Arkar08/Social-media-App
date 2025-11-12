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