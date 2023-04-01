"use client"
import {usePreview} from '../lib/sanity.preview'
import BlogList from './BlogList';

type Props={
    data: string;
}

export default function PreviewBlogList({data}: Props){
    const posts = usePreview(null, data)
    return <BlogList posts={posts}/>
}