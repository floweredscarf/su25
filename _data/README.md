When adding something to resources.yml, an example of adding a collection of worksheets and associated videos nested within a titled group can be found below (to follow):

'''
 - heading: Tutoring Worksheets
        body: |
            - <a href="./tutoring/Worksheet1.pdf">Worksheet 1</a> - <a href="./tutoring/Worksheet1Solutions.pdf">Solutions</a>
            - <a href="./tutoring/Worksheet2.pdf">Worksheet 2</a> - <a href="./tutoring/Worksheet2Solution.pdf">Solutions</a>
            - <a href="./tutoring/Worksheet3.pdf">Worksheet 3</a> - <a href="./tutoring/Worksheet3Solution.pdf">Solutions</a>
            - <a href="./tutoring/WorksheetMT1.pdf">Worksheet for Midterm 1 Review</a> - <a href="./tutoring/WorksheetMT1Solution.pdf">Solutions</a> - <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRKf_Ze-TRX_uvEVuvOI0mbK">Videos</a>
            - <a href="./tutoring/Worksheet4.pdf">Worksheet 4</a> - <a href="./tutoring/Worksheet4Solution.pdf">Solutions</a> - <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRKp2o-VFR9-eERpeUhweA4Y">Videos</a>
            - <a href="./tutoring/Worksheet5Tutoring.pdf">Worksheet 5</a> - <a href="./tutoring/Worksheet5Solution.pdf">Solutions</a> - <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRJ76t0qM1ALFCp3TPEdMG-q">Videos</a>
            - <a href="./tutoring/Worksheet6Tutoring.pdf">Worksheet 6</a> - <a href="./tutoring/Worksheet6Solution.pdf">Solutions</a> - <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRL84s2Np2ESEsMT6SVMegrd">Videos</a>
            - <a href="./tutoring/Worksheet7Tutoring.pdf">Worksheet 7</a> -  <a href="./tutoring/Worksheet7Solution2.pdf">Solutions</a> -  <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRIVAPNuLIOypGmXwZ-X514J">Videos</a>
            - <a href="./tutoring/Worksheet8Tutoring.pdf">Worksheet 8</a> -  <a href="./tutoring/Worksheet8Solution.pdf">Solutions</a>
            - <a href="./tutoring/Worksheet9Tutoring.pdf">Worksheet 9</a> -  <a href="./tutoring/Worksheet9Solution.pdf">Solutions</a> -  <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRLjlLuY3bwopMfkqeXIeWCn">Videos</a>
            - <a href="./tutoring/Worksheet10.pdf">Worksheet 10</a> -  <a href="./tutoring/Worksheet10Solutions.pdf">Solutions</a> -  <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRL_wyUJGH58Urs3COLiVUP4">Videos</a>
            - <a href="./tutoring/Worksheet11Tutoring.pdf">Worksheet 11</a> -  <a href="./tutoring/Worksheet11Solutions.pdf">Solutions</a> -  <a href="https://www.youtube.com/playlist?list=PLDMWsWbBOBRKWglUX25EA_JkT1nH6iaMB">Videos</a>
            - <a href="./tutoring/Worksheet12Tutoring.pdf">Worksheet 12</a> -  <a href="./tutoring/Worksheet12Solutions3.pdf">Solutions</a> -  <a href="https://www.youtube.com/playlist?list=PL1ES8VSiDf0UIpQiKauDXyTcmBKYirPlz">Videos</a>
'''


To generate the tutors.csv and the zoom links, see the zoom_links_to_yaml.py script and download roster.

To generate bios.csv look at staff/staff_bios_yaml.py