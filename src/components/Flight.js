function Flight({item: value}) {
  return (

    <div>
        {value.mission_name} - {value.launch_year}
        <img src = {value.links.mission_patch} alt='mission_patch'/>
    </div>
  );
}

export default Flight;