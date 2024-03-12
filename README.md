# Resume Generator
It uses the pdfkit library to create the pdf document

## Overview

The Resume Generator is a command-line tool designed to simplify the process of creating professional resumes. It takes two user inputs
- first it takes raw url to json file or path to json file
- secondly it takes the output path along with output file name followed by '.pdf'

## Overview of files

- jsonData.js => contains the code to extract the json data from url or path and write it to realInfo.json.
- resume.js => contains the code for generating resume from the json data.
- resumeGenerator.js => contains the code for validating the json url/path and output file and activating the resume.js for resume creation


## Features

- Easy-to-use command-line interface.
- Support for file format PDF

## Installation

- git clone https://github.com/itsspyner/ResumeGenerator_with_different_links.git
- cd ResumeGenerator_with_different_links
- npm install

## Implementation of the program 

- node resumeGenerator.js <url_to_json_file or path_to_json_file> <name_of_the_output_file.pdf>
