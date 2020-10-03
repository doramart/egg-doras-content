module.exports = {


    async addTagRecords(ctx, conentId, tags) {
        for (const tagItem of tags) {
            await ctx.service.contentAndTag.create({
                content_id: conentId,
                tag_id: tagItem
            })
        }
    },
    async addCategoryRecords(ctx, conentId, categories) {
        for (const cateItem of categories) {
            await ctx.service.contentAndCategory.create({
                content_id: conentId,
                category_id: cateItem
            })
        }
    }

}