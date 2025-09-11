export const transformComment = (dbComment) => ({
    id: dbComment.id,
    postID: dbComment.post_id,
    authorId: dbComment.author_id,
    publishedAt: dbComment.published_at,
    content: dbComment.content,
});
