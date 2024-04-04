module.exports = {
    attributesUser: ['id','uuid','username', 'name', 'desc', 'email', 'image_profile', 'verify', 'backgroundId','followerCount', 'followingCount'],
    attributesFollowCountUser: ['uuid', 'name', 'followerCount', 'followingCount'],
    attributesFollowsListUser: ['id', 'uuid', 'name', 'username', 'email', 'image_profile'],
    attributesImageProfile: ['url_image', 'name_image'],
    attributesBackground: ['url_bg', 'name_bg'],
    attributesBackgroundStories: ['id', 'color_code'],
    attributesUserImageProfileId: ['id', 'username', 'email', 'image_profile'],
    attributesPostingDescription: ['desc'],
    attributesImagePosting: ['url', 'name_img', 'ratio_id'],
    attributesRatioImage: ['ratio'],
    attributesLikePosting: ['id', 'uuid', 'like'],
    attributesIdUUIDNameUser: ['id', 'uuid', 'name'],
    attributesLikeUserId: ['userId'],
    attributesCategoryStory: ['category_story'],
    attributesFollowingId: ['follwingId']
} 