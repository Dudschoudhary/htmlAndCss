#include<stdio.h>
#include<conio.h>
union student
{
	int roll;
	float per;
};
void main()
{
	union student a,b;
	clrscr();
	printf("enter a roll number:- ");
	scanf("%d %f",&a,&b);
	printf("%d %f",a,b);
getch();
}

