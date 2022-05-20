#include<stdio.h>
#include<conio.h>
void main()
{
	int count=0,number,i,j,time=0;
	clrscr();
	printf("Enter a number to be check -: ");
	for(j=0;j<100;j++)
	{

		for(i=2;i<100;i++)
		{
	      time++;
	     if(j%i==0)
			{
			count++;
			break;
			}
		}

	if(count==0)
	   printf("It is prime number time -: %d",time);
	else
	    printf("Not Prime number , time -: %d",time);
       }

	getch();
}