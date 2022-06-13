#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ISIT420_eComCourseProject/ISIT420_eComCourseProject.csproj", "ISIT420_eComCourseProject/"]
RUN dotnet restore "ISIT420_eComCourseProject/ISIT420_eComCourseProject.csproj"
COPY . .
WORKDIR "/src/ISIT420_eComCourseProject"
RUN dotnet build "ISIT420_eComCourseProject.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ISIT420_eComCourseProject.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ISIT420_eComCourseProject.dll"]
