class ProfileNotFound extends Error{
    constructor(message: string){
        super(message);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);

        this.message = message;
    }
}

export default ProfileNotFound;