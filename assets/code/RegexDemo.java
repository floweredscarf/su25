/*
Lecture 7 Code, CS 61BL Summer 2019, UC Berkeley
@author Matthew Sit
 */

import java.io.IOException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexDemo {

    /**
     * Takes a String url and returns back the HTML page source code of the webpage at that URL.
     * @source https://stackoverflow.com/a/13632114
     */
    static String readURL(String url) throws IOException {
        try (Scanner scanner = new Scanner(new URL(url).openStream(),
                StandardCharsets.UTF_8.toString())) {

            // \A marks the beginning of the entire string.
            // (as opposed to ^ which matches the beginning of a line of text)
            scanner.useDelimiter("\\A");

            // Scanner implements Iterator<String>!
            if (scanner.hasNext()) {
                return scanner.next();
            } else {
                return "";
            }
        }
    }

    public static void main(String[] args) {

        // Imagine substituting this query for a list of queries instead...
        String query = "farewell";

        try {
            String html = readURL("https://www.youtube.com/results?search_query=" + query);

            // *****************************************************************************
            // The concepts demonstrated by these lines are fully in scope for the final exam.

            Pattern p = Pattern.compile("<a href=\"/watch.*?title=\"(.*?)\"");
            Matcher m = p.matcher(html);

            while (m.find()) {
                System.out.println(m.group(1));
            }

            // *****************************************************************************

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
