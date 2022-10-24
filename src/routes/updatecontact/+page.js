	export async function load(params) {
		return {
    params: {
      back: params.url.searchParams.get('back') || '',
      firstName: params.url.searchParams.get('firstName'),
      lastName: params.url.searchParams.get('lastName') || '',
      name: params.url.searchParams.get('name') || '',
      cloudinaryId: params.url.searchParams.get('photoId') || '',
      deceased: params.url.searchParams.get('deceased') || '',
      confirmed: params.url.searchParams.get('confirmed') || '',
      type: params.url.searchParams.get('type') || '',
      department: params.url.searchParams.get('department') || '', 
      position: params.url.searchParams.get('position') || '',
    }
  }
}