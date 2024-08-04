import User,{ IUser} from '@src/models/User';

// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(username: string): Promise<IUser | null> {
 const user  = await User.findOne({username})
 if(user) return user

 return null
}

/**
 * Get one user by id.
 */
async function getOneById(id: string): Promise<IUser | null> {
  const user  = await User.findById(id)
  if(user) return user
 
  return null
 }

/**
 * See if a user with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
const user = await User.findById(id)
if(user) return true
  return false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
const users = await User.find()
return users
}

/**
 * Add one user.
 */
async function add(user: IUser): Promise<void> {
  await User.create(user)
}

/**
 * Update a user.
 */
async function update(user: IUser): Promise<void> {
    await User.findByIdAndUpdate(user._id, user)
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<void> {
  await User.findByIdAndDelete(id)
}


// **** Export default **** //

export default {
  getOne,
  getOneById,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
