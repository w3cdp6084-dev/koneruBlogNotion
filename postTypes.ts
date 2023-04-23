interface Post {
 id: string;
 last_edited_time: string;
 properties: {
   Name: {
     title: string;
   };
   Thumbnail: {
     files: {
       name: string;
       type: string;
       file: {
         url: string;
         expiry_time: string;
       };
     }[];
   };
   Tags: {
     multi_select: {
       name: string;
     }[];
   };
 };
}
