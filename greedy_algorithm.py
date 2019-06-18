#Задача состоит в том, чтобы получить наименьшее кол-во станций, которые покроют все штаты

#States
states_needed = set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])
#Stations and states they cover
stations = {}
stations['one'] = set(['id', 'nv', 'ut'])
stations['two'] = set(['wa', 'id', 'mt'])
stations['three'] = set(['or', 'nv', 'ca'])
stations['four'] = set(['nv', 'ut'])
stations['five'] = set(['ca', 'az'])
#Collection of final states
final_stations = set()

while states_needed:
    #Best station and states it covers
    best_station = None
    states_covered = set()
    for station, states in stations.items():
        #List of states that are covered by current station
        covered = states_needed & states
        #If number of states that are covered by current station is bigger than the best variant
        if len(covered) > len(states_covered):
            best_station = station
            states_covered = covered
    #Reduce the number of states that are still uncovered
    states_needed -= states_covered
    final_stations.add(best_station)

print(final_stations)