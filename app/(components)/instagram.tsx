"use client";
import { Button } from "@/components/ui/button";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export interface MediaProps {
  id?: string;
  media_type?: string;
  media_url?: string;
  timestamp?: string;
  username?: string;
}
const Instagram = () => {
  const instaClientId = process.env.NEXT_PUBLIC_INSTA_USER_ID;
  const instaToken = process.env.NEXT_PUBLIC_INSTA_TOKEN;
  // Get insta posts
  const { data: initialData } = useQuery({
    queryKey: ["post"],
    queryFn: async () =>
      axios.get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${instaToken}`
      ),
  });
  // if (initialData) console.log(initialData.data.data);
  // Get insta post media links
  const postQuery = useQueries({
    queries: initialData?.data
      ? initialData?.data?.data?.map((post: any) => ({
          queryKey: ["post", post?.id],
          queryFn: () =>
            axios.get(
              `https://graph.instagram.com/${post.id}?fields=id,media_type,media_url,username,timestamp&access_token=${instaToken}`
            ),
        }))
      : [],
    combine: (results) => {
      return {
        data: results.map((result) => result?.data?.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  // if (postQuery) {
  //   console.log(postQuery.data);
  // }

  return (
    <div className="font-sofiaSans">
      {/* Display posts */}
      <div className="w-full  flex flex-wrap gap-[24px]">
        {postQuery.data &&
          postQuery.data.slice(0, 8).map((post: MediaProps, index: number) => (
            <div key={index} className="lg:size-[500px] size-[300]">
              {post?.media_type === "VIDEO" ? (
                <video
                  src={post.media_url}
                  // controls
                  // autoPlay
                  width={500}
                  height={500}
                />
              ) : (
                post?.media_type === "IMAGE" && (
                  <img
                    src={post.media_url}
                    alt=""
                    width={500}
                    height={500}
                    className=""
                  />
                )
              )}
            </div>
          ))}
      </div>
      {/* Follow buttons */}
      <div className="flex gap-x-[12px] lg:gap-x-[24px] mt-[40px]">
        <Link
          target="_blank"
          href={"https://www.instagram.com/emmycodes_/"}
          className="bg-gradient-to-tr from-primaryRed to-primaryOrange w-max rounded-[12px] p-[1px] "
        >
          <Button
            variant={"outline"}
            className="bg-white w-fit font-[700] text-[16px] lg:text-[24px] leading-[19.2px] lg:leading-[28.8px] py-[7px] lg:py-[16px] px-[12px] lg:px-[20px] text-black"
          >
            Load More
          </Button>
        </Link>
        <Link href={"https://www.instagram.com/emmycodes_/"} target="_blank">
          <Button className="font-[700] text-[16px] lg:text-[24px] leading-[19.2px] lg:leading-[28.8px] py-[8px] lg:py-[16px] px-[12px] lg:px-[20px]  ">
            Follow Us on instagram
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Instagram;
