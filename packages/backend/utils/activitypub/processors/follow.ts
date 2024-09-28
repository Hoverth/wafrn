import { Follows } from '../../../db.js'
import { activityPubObject } from '../../../interfaces/fediverse/activityPubObject'
import { acceptRemoteFollow } from '../acceptRemoteFollow'
import { getRemoteActor } from '../getRemoteActor'
import { signAndAccept } from '../signAndAccept'

async function FollowActivity(body: activityPubObject, remoteUser: any, user: any) {
  const apObject: activityPubObject = body
  // Follow user
  const userToBeFollowed = await getRemoteActor(apObject.object, user)
  let remoteFollow = await Follows.findOne({
    where: {
      followerId: remoteUser.id,
      followedId: userToBeFollowed.id
    }
  })
  if (!remoteFollow) {
    remoteFollow = await Follows.create({
      followerId: remoteUser.id,
      followedId: userToBeFollowed.id,
      remoteFollowId: apObject.id,
      accepted: userToBeFollowed.url.startsWith('@') ? true : !userToBeFollowed.manuallyAcceptsFollows
    })
  }
  await remoteFollow.save()
  // we accept it if user accepts follows automaticaly
  if (remoteFollow.accepted) {
    await acceptRemoteFollow(userToBeFollowed.id, remoteUser.id)
  }
}

export { FollowActivity }
