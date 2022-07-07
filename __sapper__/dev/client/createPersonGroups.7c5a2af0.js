function formatName(firstName, lastName, marriedLastName) {
  const formattedName = marriedLastName !== '' && marriedLastName !== undefined
    ? firstName.concat(' (',lastName,') ',marriedLastName) 
    : firstName.concat(' ',lastName);
  return formattedName
}

function createPersonGroups(persons) {

  const photoPlaceholder = 'chs_photo_placeholder_otiogp.png';

  const personsGrouping1Lth = Math.floor(persons.length / 2);
  let personsGrouping1 = [];
  for (let i = 0; i < personsGrouping1Lth; i++) {
    personsGrouping1.push({
      firstName: persons[i].firstName,
      lastName: persons[i].lastName,
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === '' ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
      department: persons[i].department ? persons[i].department : '',
      position: persons[i].position ? persons[i].position : '',
    });
  }

  let personsGrouping2 = [];
  for (let i = personsGrouping1Lth; i < persons.length; i++) {
    personsGrouping2.push({ 
      firstName: persons[i].firstName,
      lastName: persons[i].lastName,
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === '' ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
      department: persons[i].department ? persons[i].department : '',
      position: persons[i].position ? persons[i].position : '',
    });
  }

  return [ personsGrouping1, personsGrouping2 ]

}

export { createPersonGroups as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUGVyc29uR3JvdXBzLjdjNWEyYWYwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZm9ybWF0TmFtZS5qcyIsIi4uLy4uLy4uL3NyYy91dGlscy9jcmVhdGVQZXJzb25Hcm91cHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TmFtZShmaXJzdE5hbWUsIGxhc3ROYW1lLCBtYXJyaWVkTGFzdE5hbWUpIHtcbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IG1hcnJpZWRMYXN0TmFtZSAhPT0gJycgJiYgbWFycmllZExhc3ROYW1lICE9PSB1bmRlZmluZWRcbiAgICA/IGZpcnN0TmFtZS5jb25jYXQoJyAoJyxsYXN0TmFtZSwnKSAnLG1hcnJpZWRMYXN0TmFtZSkgXG4gICAgOiBmaXJzdE5hbWUuY29uY2F0KCcgJyxsYXN0TmFtZSlcbiAgcmV0dXJuIGZvcm1hdHRlZE5hbWVcbn1cbiIsImltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4vZm9ybWF0TmFtZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGVyc29uR3JvdXBzKHBlcnNvbnMpIHtcblxuICBjb25zdCBwaG90b1BsYWNlaG9sZGVyID0gJ2Noc19waG90b19wbGFjZWhvbGRlcl9vdGlvZ3AucG5nJ1xuXG4gIGNvbnN0IHBlcnNvbnNHcm91cGluZzFMdGggPSBNYXRoLmZsb29yKHBlcnNvbnMubGVuZ3RoIC8gMilcbiAgbGV0IHBlcnNvbnNHcm91cGluZzEgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcnNvbnNHcm91cGluZzFMdGg7IGkrKykge1xuICAgIHBlcnNvbnNHcm91cGluZzEucHVzaCh7XG4gICAgICBmaXJzdE5hbWU6IHBlcnNvbnNbaV0uZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IHBlcnNvbnNbaV0ubGFzdE5hbWUsXG4gICAgICBuYW1lOiBmb3JtYXROYW1lKHBlcnNvbnNbaV0uZmlyc3ROYW1lLCBwZXJzb25zW2ldLmxhc3ROYW1lLCBwZXJzb25zW2ldLm1hcnJpZWRMYXN0TmFtZSksXG4gICAgICBjbG91ZGluYXJ5SWQ6IHBlcnNvbnNbaV0uY2xvdWRpbmFyeUlkID09PSAnJyA/IHBob3RvUGxhY2Vob2xkZXIgOiBwZXJzb25zW2ldLmNsb3VkaW5hcnlJZCxcbiAgICAgIGRlY2Vhc2VkOiBwZXJzb25zW2ldLmRlY2Vhc2VkLFxuICAgICAgY29uZmlybWVkOiBwZXJzb25zW2ldLmNvbmZpcm1lZCxcbiAgICAgIGRlcGFydG1lbnQ6IHBlcnNvbnNbaV0uZGVwYXJ0bWVudCA/IHBlcnNvbnNbaV0uZGVwYXJ0bWVudCA6ICcnLFxuICAgICAgcG9zaXRpb246IHBlcnNvbnNbaV0ucG9zaXRpb24gPyBwZXJzb25zW2ldLnBvc2l0aW9uIDogJycsXG4gICAgfSlcbiAgfVxuXG4gIGxldCBwZXJzb25zR3JvdXBpbmcyID0gW11cbiAgZm9yIChsZXQgaSA9IHBlcnNvbnNHcm91cGluZzFMdGg7IGkgPCBwZXJzb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgcGVyc29uc0dyb3VwaW5nMi5wdXNoKHsgXG4gICAgICBmaXJzdE5hbWU6IHBlcnNvbnNbaV0uZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IHBlcnNvbnNbaV0ubGFzdE5hbWUsXG4gICAgICBuYW1lOiBmb3JtYXROYW1lKHBlcnNvbnNbaV0uZmlyc3ROYW1lLCBwZXJzb25zW2ldLmxhc3ROYW1lLCBwZXJzb25zW2ldLm1hcnJpZWRMYXN0TmFtZSksXG4gICAgICBjbG91ZGluYXJ5SWQ6IHBlcnNvbnNbaV0uY2xvdWRpbmFyeUlkID09PSAnJyA/IHBob3RvUGxhY2Vob2xkZXIgOiBwZXJzb25zW2ldLmNsb3VkaW5hcnlJZCxcbiAgICAgIGRlY2Vhc2VkOiBwZXJzb25zW2ldLmRlY2Vhc2VkLFxuICAgICAgY29uZmlybWVkOiBwZXJzb25zW2ldLmNvbmZpcm1lZCxcbiAgICAgIGRlcGFydG1lbnQ6IHBlcnNvbnNbaV0uZGVwYXJ0bWVudCA/IHBlcnNvbnNbaV0uZGVwYXJ0bWVudCA6ICcnLFxuICAgICAgcG9zaXRpb246IHBlcnNvbnNbaV0ucG9zaXRpb24gPyBwZXJzb25zW2ldLnBvc2l0aW9uIDogJycsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBbIHBlcnNvbnNHcm91cGluZzEsIHBlcnNvbnNHcm91cGluZzIgXVxuXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFlLFNBQVMsVUFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFO0FBQ3pFLEVBQUUsTUFBTSxhQUFhLEdBQUcsZUFBZSxLQUFLLEVBQUUsSUFBSSxlQUFlLEtBQUssU0FBUztBQUMvRSxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0FBQzFELE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDO0FBQ3BDLEVBQUUsT0FBTyxhQUFhO0FBQ3RCOztBQ0hlLFNBQVMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQ3BEO0FBQ0EsRUFBRSxNQUFNLGdCQUFnQixHQUFHLG1DQUFrQztBQUM3RDtBQUNBLEVBQUUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQzVELEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxHQUFFO0FBQzNCLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hELElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0FBQzFCLE1BQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ3JDLE1BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO0FBQ25DLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztBQUM3RixNQUFNLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEVBQUUsR0FBRyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtBQUMvRixNQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtBQUNuQyxNQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNyQyxNQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNwRSxNQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRTtBQUM5RCxLQUFLLEVBQUM7QUFDTixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksZ0JBQWdCLEdBQUcsR0FBRTtBQUMzQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7QUFDMUIsTUFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDckMsTUFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7QUFDbkMsTUFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBQzdGLE1BQU0sWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssRUFBRSxHQUFHLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBQy9GLE1BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO0FBQ25DLE1BQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ3JDLE1BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ3BFLE1BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFO0FBQzlELEtBQUssRUFBQztBQUNOLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFO0FBQy9DO0FBQ0E7Ozs7In0=