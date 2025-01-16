import { useEffect, useState } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";

interface ArticleProps {
  title: string;
  description: string;
  content: string;
}

export const ArticlePage = () => {
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      try {
        const response = await api.get(`/blog/article/${id}`);
        setArticle(response.data.blog); // Ensure response.data.blog matches the ArticleProps structure
      } catch (error) {
        console.error("Failed to fetch the article:", error);
      }
    };

    fetchArticle();
  }, [id]);


  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <p className="text-lg text-gray-600">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-lg text-gray-600">{article.description}</p>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-6" />

      {/* Article Content */}
      <div className="prose prose-lg text-gray-800">
        {article.content}
      </div>
    </div>
  );
};
