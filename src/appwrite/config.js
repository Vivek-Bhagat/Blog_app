import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  buckets;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.buckets = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: deletePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite error :: getPost :: error", error);
      return false;
    }
  }

  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: getAllPost :: error", error);
      return false;
    }
  }

  // File upload services
  async uploadFile(file) {
    try {
      await this.buckets.createFile(conf.appwriteBucketId, ID.unique(), file);
      return true;
    } catch (error) {
      console.log("Appwrite error :: uploadFile :: error", error);
      return false;
    }
  }

  // delete file
  async deleteFile(fileId) {
    try {
      await this.buckets.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite error :: uploadFile :: error", error);
      return false;
    }
  }

  // file preview
  getFilePreview(fileId) {
    return this.buckets.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const databaseService = new DatabaseService();
export default databaseService;
