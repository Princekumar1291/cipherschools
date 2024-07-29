import java.io.File;

public class demo {
    public static void main(String[] args) {
        // Define the start and end range for folder creation
        int start = 52;
        int end = 70;

        // Loop through the range and create folders
        for (int i = start; i <= end; i++) {
            // Create folder name
            String folderName = "_" + i + "_lecture";

            // Create File object
            File folder = new File(folderName);

            // Check if the folder already exists, if not, create it
            if (!folder.exists()) {
                boolean isCreated = folder.mkdir();
                if (isCreated) {
                    System.out.println("Folder created: " + folderName);
                } else {
                    System.out.println("Failed to create folder: " + folderName);
                }
            } else {
                System.out.println("Folder already exists: " + folderName);
            }
        }
    }
}
