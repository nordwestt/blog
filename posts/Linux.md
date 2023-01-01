# Switching to Linux

## Enough is enough
The journey started in January 2021 after experiencing multiple BSOD’s in the same week on Windows on both my stationary computer and laptop, both on brand new installs (I had been experiencing this for a while).
Life’s too short for putting up with regular BSOD’s on a paid piece of software, I thought, as I searched up the download page for the most popular Linux distribution; Ubuntu.

## Installation
Installation was short and sweet and I was able to find essential tools for University, such as Microsoft Teams, VS Code and Zoom.

I knew I wouldn’t be installing Microsoft Office as they for some reason haven’t made it available, but luckily Office 365 allows you to edit straight from the browser and there are several good inter-compatible alternatives such as LibreOffice and OnlyOffice.

Ubuntu comes with Firefox pre-installed, but you can easily download Brave, Google Chrome, Edge etc.

## Usage
Everything looks a little different and things aren’t where they usually are, which means it takes a little longer to do any given task. But once you get familiar with how you open and close your internet browser, navigate the file explorer and change your wifi settings you’re set for 90% of what people use a computer for anyways.

Someone clever once said “The OS is just a bootstrap for the internet browser”, which I think holds true for the majority of computer users.

That’s it! (for most people)

## Main commands
To open the terminal, you can search for ‘terminal’ or simple hit ‘Ctrl+Alt+T’.

This brings up a terminal, where you can enter bash (born again shell) commands.

### Package manager
Nowadays Ubuntu allows for programs to be installed ‘windows-style’ using .deb files. However, a large number of programs can be installed using the terminal, and the reason is that it’s super fast and convenient once you learn to use it. So here’s a very brief rundown.

Most linux distributions come with package managers, which allow you to install, update and remove your programs with a single commands.

Let’s take a look at a command for installing a program:

sudo apt install code
sudo - “Super User DO” - runs command as administrator
apt - “Advanced Package Tool” - the command for managing packages
install - does what it says on the label
code - the name of our program (in this case VS Code)
Here are the most useful commands:

sudo apt update
sudo apt upgrade
sudo apt install <some program>