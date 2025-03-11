import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '../types/context';

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/api/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export function useBlogPosts() {
  return useQuery<BlogPost[], Error>({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });
} 