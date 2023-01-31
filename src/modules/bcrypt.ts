import * as bcrypt from 'bcrypt';

export const hashedPassword = async (password: string): Promise<string> => {
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(password, salt);
     return hash;
     
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
     try {
          const matchFound = await bcrypt.compare(password, hash);
          return matchFound;
     } catch (err) {
          console.log(err);
     }
     return false;
};
