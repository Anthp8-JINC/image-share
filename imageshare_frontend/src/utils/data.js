export const categories = [
    {
      name: 'art',
      image: 'https://storage.googleapis.com/randomimage_storage/art.png',
    },
    {
      name: 'business',
      image: 'https://storage.googleapis.com/randomimage_storage/business.png',
    },
    {
      name: 'food',
      image: 'https://storage.googleapis.com/randomimage_storage/food.png',
    },
    {
      name: 'funny',
      image: 'https://storage.googleapis.com/randomimage_storage/funny.png',
    },
    {
      name: 'nature',
      image: 'https://storage.googleapis.com/randomimage_storage/nature.png',
    },
    {
      name: 'pets',
      image: 'https://storage.googleapis.com/randomimage_storage/pets.png',
    },
    {
      name: 'quotes',
      image: 'https://storage.googleapis.com/randomimage_storage/quotes.png',
    },
    {
      name: 'random',
      image: 'https://storage.googleapis.com/randomimage_storage/random.png',
    }, {
      name: 'selfie',
      image: 'https://storage.googleapis.com/randomimage_storage/selfi.png',
    },
    {
      name: 'travel',
      image: 'https://storage.googleapis.com/randomimage_storage/travel.png',
    }, {
      name: 'wallpaper',
      image: 'https://storage.googleapis.com/randomimage_storage/wallpaper.png',
    }, {
      name: 'Yellow',
      image: 'https://storage.googleapis.com/randomimage_storage/yellow.png',
    },
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
  ];
  
  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };