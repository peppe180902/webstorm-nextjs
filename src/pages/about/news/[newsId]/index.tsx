import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";
import news from "@/pages/about/news";

type NewsDetailsProps = {
  news: {
    id: string;
    title: string;
  };
};

const NewsDetails = memo(({ news }: NewsDetailsProps) => {
  return (
    <>
      <AppHead title="NewsDetails" description="" />
      <div>newsDetails</div>
      <div>{news.id}</div>
      <div>{news.title}</div>
    </>
  );
});
NewsDetails.displayName = "NewsDetails";

export default NewsDetails;

export async function getStaticPaths({}): Promise<
  GetStaticPathsResult<{
    newsId: string;
  }>
> {
  const newsList = [
    {
      id: "1",
      title: "Titolo News",
    },
    {
      id: "2",
      title: "News 2",
    },
    {
      id: "3",
      title: "News 3",
    },
  ];
  return {
    paths: newsList.map((news) => ({
      params: {
        newsId: news.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: { newsId },
}: GetStaticPropsContext<{ newsId: string }>): Promise<
  GetStaticPropsResult<NewsDetailsProps>
> {
  const news = {
    id: newsId,
    title: "titolo news" + newsId,
  };
  return {
    props: {
      news,
    },
  };
}
