const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define(
  'players',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fifa_version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fifa_update: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    player_face_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    long_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    player_positions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    club_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nationality_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overall: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    potential: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    value_eur: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    wage_eur: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    height_cm: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    weight_kg: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    preferred_foot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weak_foot: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    skill_moves: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    international_reputation: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    work_rate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pace: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    shooting: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    passing: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    dribbling: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    defending: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    physic: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    attacking_crossing: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    attacking_finishing: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    attacking_heading_accuracy: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    attacking_short_passing: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    attacking_volleys: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    skill_dribbling: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    skill_curve: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    skill_fk_accuracy: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    skill_long_passing: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    skill_ball_control: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    movement_acceleration: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    movement_sprint_speed: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    movement_agility: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    movement_reactions: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    movement_balance: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    power_shot_power: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    power_jumping: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    power_stamina: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    power_strength: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    power_long_shots: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    mentality_aggression: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    mentality_interceptions: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    mentality_positioning: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    mentality_vision: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    mentality_penalties: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    mentality_composure: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    defending_marking: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    defending_standing_tackle: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    defending_sliding_tackle: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    goalkeeping_diving: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    goalkeeping_handling: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    goalkeeping_kicking: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    goalkeeping_positioning: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    goalkeeping_reflexes: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    goalkeeping_speed: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    player_traits: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false },
);

module.exports = Player;
